import React, { memo, useCallback, useState } from "react"
import style from "./ReportAddForm.module.scss"
import { Button, Input, Radio, RadioGroup, Stack, Text, Textarea } from "@chakra-ui/react"
import { trashLevels } from "shared/data/level-trash"
import { useAddNewReportMutation } from "../model/report-add-api"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

interface IReportAddForm {
    id: number
}

const ReportAddForm: React.FC<IReportAddForm> = memo(({id}) => {
    const [files, setFile] = useState<File | null>(null)
    const [inputMessage, setInputMessage] = useState("")
    const [levelTrash, setLevelTrash] = useState(0)

    const token = useAppSelector(state => state.authReducer.token)

    const [addReport, _] = useAddNewReportMutation()

    const fileChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
        }
    };

    const addReportHandle = useCallback(() => {
        if(files){
            const formData = new FormData();
            formData.append('file', files);

            addReport({
                form: {
                    id: id,
                    files: [formData],
                    message: inputMessage,
                    pollutionLevel: levelTrash,
                },
                token: token ?? ''
            })   
        }
    }, [files, inputMessage, levelTrash])

    return(
        <div className={style.form}>
            <Input 
                onChange={fileChangeHandle} 
                placeholder="выберите картинки" 
                variant='filled' 
                type="file"/>
            <RadioGroup margin='15px 0 0 0' defaultValue='0'>
                <Text>Уровень загрязнения</Text>
                <Stack spacing={5} direction='row'>
                    {trashLevels.map(
                        (item, index) => <Radio size='lg' onChange={() => setLevelTrash(index)} colorScheme={item.color} value={String(index)}>{item.name}</Radio>
                    )}
                </Stack>
            </RadioGroup>
            <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                margin='20px 0 0 0'
                variant='filled'
                placeholder='коментарий'
                size='sm'
            />
            <div className={style.button_wrapper}>
                <Button onClick={addReportHandle} width={150} colorScheme="green">
                    Добавить
                </Button>
            </div>
        </div>
    )
})

export default ReportAddForm