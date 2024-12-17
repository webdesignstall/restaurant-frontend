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

        const category = await db.category.create({
            data: {
                name,
                slug,
                parentId, // Allow null for top-level categories
                status,
                image: imageUrl,
                offerStartDate,
                offerEndDate,
            },
        });

        return NextResponse.json(category, { status: 201 });
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
    try {
        // Fetch categories from the database
        const category = await db.category.findMany();

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
