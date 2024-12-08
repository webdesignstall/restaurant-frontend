import Layout from '@/components/layout/Layout';
import React from 'react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <Layout>
                {children}
            </Layout>
        </section>
    );
}
