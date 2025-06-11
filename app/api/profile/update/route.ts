import { connectDB } from "@/lib/mongo";
import { User } from "@/models/User";



connectDB();
export async function PATCH(request: Request) {
    const body = await request.json();
    const { email, phone, password } = body;
    if (!email && !phone && !password) {
        return new Response(JSON.stringify({ error: "No fields to update" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    const userId = await User.findOne({ email }).then(user => user?._id);
    
    if (!userId) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    const updateData: any = {};
    if (email) updateData.email = email;
    updateData.phone = phone;
    if (password) updateData.password = password;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true }
        );
        return new Response(JSON.stringify({ message: "Profile updated successfully", user: updatedUser }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return new Response(JSON.stringify({ error: "Failed to update profile" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}