import { CreateByParentServiceAble } from "./creatByParentServiceAble";
import { CreateServiceAble } from "./createServiceAble";
import { DeleteServiceAble } from "./deleteServiceAble";
import { GetByParentServiceAble } from "./getByParentServiceAble";
import { UpdateServiceAble } from "./updateServiceAble";

export interface PlacemnetServiceAble<T, C ,Parent> extends  GetByParentServiceAble<T, Parent>, UpdateServiceAble<T>, DeleteServiceAble<T>, CreateByParentServiceAble<C, Parent>{
    
}