export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <aside className="w-64 bg-gray-900 text-white p-4">
                <nav>
                    <ul>
                        <li><a href="/dashboard/admin">Admin Dashboard</a></li>
                        <li><a href="/dashboard/student">Student Dashboard</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
