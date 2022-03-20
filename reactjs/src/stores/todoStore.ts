import { action, observable } from 'mobx';

import { PagedResultDto } from '../services/dto/pagedResultDto';
import todoService from '../services/todo/todoService';
import { GetAllToDoOutput } from '../services/todo/dto/getAllToDoOutput';
import { PagedResultRequestDto } from '../services/todo/dto/PagedResultRequestDto';

class ToDoStore {
    @observable todos!: PagedResultDto<GetAllToDoOutput>;
    // @action
    // async createUser() {
    //     this.editUser = {
    //         userName: '',
    //         name: '',
    //         surname: '',
    //         emailAddress: '',
    //         isActive: false,
    //         roleNames: [],
    //         password: '',
    //         id: 0,
    //     };
    //     this.roles = [];
    // }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedResultRequestDto) {
        let result = await todoService.getAll(pagedFilterAndSortedRequest);
        this.todos = result;
    }
}

export default ToDoStore;
