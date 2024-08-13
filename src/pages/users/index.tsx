import UserPreviewCard from "@/components/user/user-preview-card";
import { User } from "@/types/userType";

export default function Users() {
    const users: Array<User> = [];

    function fetchAllUsers() {

    }

    return (
        <div className="w-full flex items-center justify-center">
            {
                users?.map((user) => <UserPreviewCard user={user} key={user.id} />)
            }
        </div>
    );
}