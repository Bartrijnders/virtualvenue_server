import { CreateByParentServiceAble } from "./creatByParentServiceAble";
import { DeleteServiceAble } from "./deleteServiceAble";
import { GetByIdServiceAble } from "./getByIdServiceAble";
import { GetByParentServiceAble } from "./getByParentServiceAble";
import { UpdateServiceAble } from "./updateServiceAble";

export interface PlacemnetServiceAble<T, C ,Parent> extends  GetByIdServiceAble<T> , GetByParentServiceAble<T, Parent>, UpdateServiceAble<T>, DeleteServiceAble<T>, CreateByParentServiceAble<C, Parent>{
    
}