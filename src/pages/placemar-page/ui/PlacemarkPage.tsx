import { useParams } from "react-router-dom"
import style from "./PlacemarkPage.module.scss"
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrashRestore } from "react-icons/fa";

import { Button, CircularProgress, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Layout } from "widgets/index"
import { trashLevels } from "shared/data/level-trash";
import { ReportItem, useGetReportsQuery } from "entities/report";
import { ReportAddFormLazy } from "features/report-add-form";

const PlacemarkPage = () => {
    const {id = 0} = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {data = [], isLoading} = useGetReportsQuery(Number(id));

  if (isLoading)
    return (
      <div className={style.wrapper_loader}>
        <CircularProgress value={80} />
      </div>
    );

  // if(data?.length === 0 || !data){
  //     setTimeout(() => {
  //         navigation(pathRoutes["not-found"].path)
  //     }, 200);
  // }

    return(
        <Layout>
            <div className={style.page}>
                <div className={style.slider}>
                    
                </div>
                <div className={style.info}>
                    <span><FaUser/> Автор: {data[0].username || 'неизвестно'}</span>
                    <span>
                        <FaTrashRestore/>
                        <span>Уровень загрязнения:</span>
                        <div 
                            style={{backgroundColor: trashLevels[data[0].pullutionLevel || 0].color}} 
                            className={style.color}/>
                        <span
                            className={style.level_trash}
                            style={{color: trashLevels[data[0].pullutionLevel || 0].color}}>
                                - {trashLevels[data[0].pullutionLevel || 0].name}
                        </span>
                    </span>
                    <span><FaCalendarAlt/> дата: {data[0].date || 'неизвестно'}</span>
                </div>
                <div className={style.description}>
                    {data[0].message}
                </div>
                <Button onClick={onOpen} colorScheme="green">
                    Добавить репорт
                </Button>
                <div className={style.reports}>
                    {data?.map(item => 
                            <ReportItem key={item.id} {...item}/>)}
                </div>
            </div>

            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent padding='10px'>
                    <ModalHeader>Добавить репорт</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ReportAddFormLazy id={Number(id)}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Layout>
    )
}

export default PlacemarkPage
