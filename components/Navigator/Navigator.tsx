import { Route } from "@/models";
import Link from "next/link";

interface Props {
    pathnames: Route[];
}

function Navigator({ pathnames }: Props){
    return (
        <div style={{ display: 'flex', gap: "15px", flexDirection: "row" }}>
        {pathnames.map(pathname => 
            <Link className="bg-fuchsia-500 hover:bg-sky-700" key={pathname.path} href={pathname.path}>{pathname.name}</Link>
        )}    
        </div>
    )
}

export default Navigator;