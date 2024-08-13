import { User } from "@/types/userType";
import Image from "next/image";

export default function UserPreviewCard({ user }: { user: User }) {

    function showUser() {
        console.log("show user function, user.id = ", user.id);
    }

    return (
        <div onClick={() => showUser()} className="w-full bg-green-300">
            <div>
                <Image src={user.avatar} alt="user avatar" width={100} height={100} />
            </div>
            <div className="w-full grid">
                <p>{user.name} {user.surname}</p>
                <p>{user.email}</p>
                <p>{user.position}</p>
            </div>
        </div>
    )
} 