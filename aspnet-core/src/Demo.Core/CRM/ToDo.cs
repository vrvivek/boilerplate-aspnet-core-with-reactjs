using Abp.Domain.Entities.Auditing;
using Demo.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Demo.CRM
{
    [Table("ToDos")]
    public class ToDo : AuditedEntity<int>
    {
        public virtual string Name { get; set; }
        public virtual bool IsStatus { get; set; }
        [ForeignKey(nameof(UserId))]
        public virtual long UserId { get; set; }
        public virtual User User { get; set; }
    }
}
