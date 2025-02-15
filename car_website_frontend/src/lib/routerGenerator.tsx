import { TRoute, TuserPath } from "../ts/types/ts.types";



 export const routerGenerator = (items:TuserPath[]) => {
     const Routes: TRoute[] = [];
    
    for (const item of items) {
      if (item.path && item.element) {
        Routes.push({
          path: item.path,
          element: item.element,
        });
      }
    
      if (item.children) {
        for (const child of item.children) {
          Routes.push({
            path: child.path!,
            element: child.element,
          });
        }
      }
    }
    return Routes
    
}