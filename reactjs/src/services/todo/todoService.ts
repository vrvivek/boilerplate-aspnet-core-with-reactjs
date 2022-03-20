import { GetAllToDoOutput } from './dto/getAllToDoOutput';
import { PagedResultDto } from '../dto/pagedResultDto';
import { PagedResultRequestDto } from "./dto/PagedResultRequestDto";
import http from '../httpService';

class ToDoService {
  public async getAll(pagedFilterAndSortedRequest: PagedResultRequestDto): Promise<PagedResultDto<GetAllToDoOutput>> {
    let result = await http.get('api/services/app/ToDo/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}

export default new ToDoService();
