export interface SidebarItemProps {
    title: string;
    icon: string;
    path: string;
    nested?: SidebarItemProps[];
}