import { HttpResponse} from '@angular/common/http'

import { IdentityResType } from '../core/start-up';

const identityMock:IdentityResType = {
    success: true,
    payload: {
       staffName:'yink',
       staffId:'123123d3',
       identity:'admin'
    }
}

export const identityMockResponse = new HttpResponse({
    status:200,
    body:identityMock
})