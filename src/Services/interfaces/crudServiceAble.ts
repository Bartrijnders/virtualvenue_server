import { DeleteServiceAble } from "./deleteServiceAble";
import { GetServiceAble } from "./getServiceAble";
import { CreateServiceAble } from "./createServiceAble";
import { UpdateServiceAble } from "./updateServiceAble";

export interface CrudServiceAble<T> extends GetServiceAble<T>, UpdateServiceAble<T>, DeleteServiceAble<T>, CreateServiceAble<T>{

}