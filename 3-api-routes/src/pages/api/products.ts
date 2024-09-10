
import Product from '@/types/products'
import type { NextApiRequest, NextApiResponse } from 'next'

import data from '@/data/products.json'

type ResponseData = {
    totalRetrieved: number;
    data: Product[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const products = data as Product[]

    res.status(200).json({ totalRetrieved: products.length, data: products })
}