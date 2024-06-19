import { ModeToggle } from "@/components/ModeToggle";
import Icon from "./Icon";

export default function NavBar() {
    return (
        <div className="flex h-[10svh] w-full items-center">
            <Icon />
            <ModeToggle className="ml-auto" />
        </div>
    );
}
