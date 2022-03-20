using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Demo.CRM.ToDos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.CRM.ToDos
{
    public interface IToDoAppService : IApplicationService
    {
        Task<ListResultDto<ToDoListDto>> GetAll(PagedResultRequestDto requestDto);
    }
}
