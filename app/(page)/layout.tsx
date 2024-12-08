import React from 'react'
import Layout from '@/components/layout/Layout';

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
