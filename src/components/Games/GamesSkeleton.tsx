import { Skeleton } from "@mui/material";
export const GamesSkeleton = () => {
    return <>
        <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rounded"width={185} 
            height={246}
            animation="wave"
        />
    </>;
};