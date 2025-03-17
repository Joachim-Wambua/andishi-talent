"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent, allowedRoles) => {
  return function AuthComponent(props) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        router.replace("/auth/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        if (!allowedRoles.includes(parsedUser.role)) {
          router.replace(
            parsedUser.role === "admin"
              ? "/dashboard/admin"
              : "/dashboard/student"
          );
        }
      } catch (error) {
        console.error("Invalid user data in localStorage:", error);
        localStorage.removeItem("user"); // Clear invalid data
        router.replace("/auth/login");
      }

      setLoading(false);
    }, [router]);

    if (loading) return <p>Loading...</p>;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
