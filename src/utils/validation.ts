export const validateField = (field: string, value: string): string => {
    const rules: Record<string, ((val: string) => string | null)[]> = {
        firstName: [(val) => val.trim() ? null : "First Name is required"],
        lastName: [(val) => val.trim() ? null : "Last Name is required"],
        email: [
            (val) => val.trim() ? null : "Email is required",
            (val) => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) ? null : "Invalid email format"
        ],
        username: [(val) => val.trim() ? null : "Username is required"],
        password: [
            (val) => val.trim() ? null : "Password is required",
            (val) => val.length >= 8 ? null : "Password must be at least 8 characters long",
            (val) => /[A-Z]/.test(val) ? null : "Password must contain at least one uppercase letter",
            (val) => /[a-z]/.test(val) ? null : "Password must contain at least one lowercase letter",
            (val) => /\d/.test(val) ? null : "Password must contain at least one number",
            (val) => /[!@#$%^&*]/.test(val) ? null : "Password must contain at least one special character (!@#$%^&*)",
        ],
        street: [(val) => val.trim() ? null : "Street is required"],
        city: [(val) => val.trim() ? null : "City is required"],
        state: [(val) => val.trim() ? null : "State is required"],
        zip: [
            (val) => val.trim() ? null : "Zip code is required",
            (val) => /^\d{5}$/.test(val) ? null : "Invalid zip code (must be 5 digits)"
        ]
    };

    // Check all validation rules
    const error = rules[field]?.map((rule) => rule(value)).find((err) => err !== null);
    return error || "";
};