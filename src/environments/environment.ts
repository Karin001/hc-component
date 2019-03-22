import { HttpErrorResponse } from '@angular/common/http';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'',
  useMock:true,
  url:{
    identity:'/api/auth/identity',
    login:'/api/auth/login',
    resetPassword:'/api/auth/resetPassword',
    logout:'/api/auth/logout',
    projectList:'/api/projectList',
    projectCalendar:'/api/projectCalendar'

  },
  auth_status:{
    admin:'admin',
    keeper:'keeper',
    engineer:' engineer',
    visitor:'visitor',
    member:'member',
    lockUser:'lockUser',
  },
  permission:{
    admin:[
      {
        name:'项目管理',
        children:[
          {
            name:'查看所有项目',
            url:'/member',
            icon:'folder'
          },
          {
            name:'新增一个项目',
            url:'/project/new',
            icon:'add',
          }
        ]
      },
      {
        name:'库存管理',
        children:[
          {
            name:'查看所有库存',
            icon:'face',
            url:'/storehouse/all'
          },
          {
            name:'批量导入',
            icon:'face',
            url:'/storehouse/import'
          },
        ]
      },   
      {
        name:'供应商',
        children:[
          {
            name:'查看所有供应商',
            icon:'face',
            url:'/storehouse/all'
          },
          {
            name:'新增供应商',
            icon:'face',
            url:'/storehouse/import'
          },
        ]
      },
      {
        name:'订单管理',
        children:[
          {
            name:'查看所有订单',
            icon:'face',
            url:'/storehouse/all'
          },
          {
            name:'下单',
            icon:'face',
            url:'/storehouse/import'
          },
        ]
      }
    ],
    member:[
      
    ]
  },
  errorHandle:{
    errorInfoKey:'errorInfo',
    getErrorInfo:function(error:HttpErrorResponse){
      return error.error[this.errorInfoKey]
    },
    errorDeCode:{
      'sesslon invalid':'权限已过期,即将过跳转到重新登录页面',
      'user or password id not right':'登录信息错误，请核对id和密码',
      'form is not valid':'登录格式错误',
      'origin password':'您未修改初始密码，即将跳转到修改密码页面',
      'login info error':'登录信息有误，请重新输入'
    },
    otherErrorInfo:'网络错误，请刷新后重试'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
