import style from "./AppPagination.module.scss";
import { Pagination } from "@mui/material";
export const AppPagination = () => {
    return <div className={style.Pagination}>
        <Pagination size="large" count={3} variant="outlined" color="primary" />
    </div>;
};