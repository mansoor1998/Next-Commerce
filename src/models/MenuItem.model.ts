export class MenuItem {
    name = '';
    permissionName = [];
    icon = '';
    route = '';
    childItems: MenuItem[] | null = null;

    public selected: boolean = false;

    constructor(name: string, icon: string, route: string, childItems: MenuItem[] | null = null) {
        this.name = name;
        this.icon = icon;
        this.route = route;
        this.childItems = childItems;
    }

    get isChildEmpty(): boolean{
        return (this.childItems == null || this.childItems?.length === 0);
    }

    isChildAvailable(item: MenuItem): boolean {
        if(this.isChildEmpty)  return false;
        return (this.childItems?.findIndex(x => item === x) != -1) ? true : false;
    }

    isChildSelected(): boolean {
        if(this.isChildEmpty)  return false;
        return (this.childItems?.findIndex(x => x.selected) != -1) ? true : false;
    }
}