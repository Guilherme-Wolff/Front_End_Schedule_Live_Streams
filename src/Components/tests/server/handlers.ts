import {rest} from 'msw'
import data from "../../../../db.json"
import {API} from "../../../api/api"
import { QueryStatus } from '@reduxjs/toolkit/dist/query'

//let statusr:QueryStatus = {status:200};

export const handlers = [
    rest.get(`${API}/recentusers`, (req,resp,ctx) => {
        return resp(ctx.status(200),ctx.json(data.search))
    })
]