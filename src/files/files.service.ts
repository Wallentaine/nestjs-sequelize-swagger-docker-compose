import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdir(filePath, { recursive: true }, () => {
                    // func`
                })
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer)

            return fileName
        } catch (error: unknown) {
            throw new HttpException('Проблемы с записью файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
