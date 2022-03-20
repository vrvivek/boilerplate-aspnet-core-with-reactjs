using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Demo.Authorization;
using Demo.CRM.ToDos.Dto;
using Abp.Runtime.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Abp.Authorization;

namespace Demo.CRM.ToDos
{
    //[AbpAuthorize(PermissionNames.Pages_CRM_ToDos)]
    public class ToDoAppService : DemoAppServiceBase,IToDoAppService
    {
        private readonly IRepository<ToDo> _toDoRepository;
        public ToDoAppService(IRepository<ToDo> toDoRepository)
        {
            _toDoRepository = toDoRepository;
        }

        public async Task<ListResultDto<ToDoListDto>> GetAll(PagedResultRequestDto requestDto)
        {
            var todos = await _toDoRepository
            .GetAll()
            .Where(a => a.UserId == AbpSession.GetUserId())
            .OrderByDescending(t => t.Id)
            .ToListAsync();

            return new ListResultDto<ToDoListDto>(
                ObjectMapper.Map<List<ToDoListDto>>(todos)
            );
        }
    }
}
