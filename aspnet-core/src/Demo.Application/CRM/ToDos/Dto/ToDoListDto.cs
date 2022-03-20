using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;
using Demo.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.CRM.ToDos.Dto
{
    [AutoMapFrom(typeof(ToDo))]
    public class ToDoListDto : EntityDto
    {
        public string Name { get; set; }
        public bool IsStatus { get; set; }
        public long UserId { get; set; }
        public DateTime CreationTime { get; set; }
    }
}
