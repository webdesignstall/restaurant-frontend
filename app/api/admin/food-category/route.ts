import db from "@/lib/db";
import _ from "lodash";
import { NextResponse } from "next/server";
import {checkRole} from "@/lib/roles";

export async function POST(request: any) {

    if (!await checkRole('admin')) {
        return NextResponse.json( { message: 'Not Authorized' })
    }

    try {
        const {
            name,
            parentId = null,
            image,
            status,
            offerStartDate = null,
            offerEndDate = null,
            id = null,
        } = await request.json();


        if (!name) {
            return NextResponse.json(
                { error: "Name is required" },
                { status: 400 }
            );
        }

        const slug = _.kebabCase(name);

        const imageUrl =
            image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

        const data = {
            name,
            slug,
            parentId, // Allow null for top-level categories
            status,
            image: imageUrl,
            offerStartDate,
            offerEndDate,
        }

        let category;

        if (id) {
            // Update if ID exists
            category = await db.category.update({
                where: { id },
                data,
            });
        } else {
            // Create new category if no ID
            category = await db.category.create({
                data,
            });
        }

        return NextResponse.json(category, { status: 201, statusText: `Category ${id ? 'updated' : 'created'} successfully!` });
    } catch (e: any) {
        if (e.code === "P2002") {
            // Prisma unique constraint violation
            return NextResponse.json(
                { error: "Category name or slug already exists" },
                { status: 409 }
            );
        }

        console.error("Unexpected Error:", e);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}

export async function GET(request: any) {
    if (!await checkRole('admin')) {
        return NextResponse.json({ message: 'Not Authorized' })
    }

    const searchParams = request.nextUrl.searchParams;
    const id = parseInt(searchParams.get('id'))

    try {
        // Fetch categories from the database
        let category
        if (id){
            category = await db.category.findUnique({ where: { id: id } });
        }else {
            category = await db.category.findMany();
        }


        // Return categories as a JSON response
        return NextResponse.json(category);
    } catch (error: any) {
        // Log the error for debugging purposes
        console.error('Error fetching categories:', error);

        // Return an error response with a message and a 500 status code
        return NextResponse.json(
            { error: 'Failed to fetch categories.' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: any) {
    if (!await checkRole('admin')) {
        return NextResponse.json({ message: 'Not Authorized' }, { status: 403 });
    }

    try {
        // Parse the `id` from the request body
        const { id } = await request.json();

        // Validate the `id`
        if (!id || typeof id !== 'number') {
            return NextResponse.json(
                { error: "A valid 'id' is required to delete a category." },
                { status: 400 }
            );
        }

        // Check if the category exists
        const category = await db.category.findUnique({ where: { id } });

        if (!category) {
            return NextResponse.json(
                { error: "Category not found. It may have already been deleted." },
                { status: 404 }
            );
        }

        // Attempt to delete the category
        await db.category.delete({ where: { id } });

        return NextResponse.json(
            { message: 'Category deleted successfully!' },
            { status: 200, statusText: 'Category deleted successfully!' }
        );
    } catch (e: any) {
        console.error('Error deleting category:', e);

        // Handle specific errors
        if (e.code === "P2003") {
            // Foreign key constraint violation
            return NextResponse.json(
                { error: "Cannot delete category as it is associated with other records." },
                { status: 409 }
            );
        }

        // Generic error response
        return NextResponse.json(
            { error: 'An unexpected error occurred while deleting the category.' },
            { status: 500 }
        );
    }
}

