import { DeleteServiceAble } from "./deleteServiceAble";
import { GetServiceAble } from "./getServiceAble";
import { CreateServiceAble } from "./createServiceAble";
import { UpdateServiceAble } from "./updateServiceAble";

export interface CrudServiceAble<T, P> extends GetServiceAble<T>, UpdateServiceAble<T>, DeleteServiceAble<T>, CreateServiceAble<P>{

}