import { useNavigate, useParams } from "react-router-dom";
import style from "./PlacemarkPage.module.scss";
import { useGetPlacemarkByIdQuery } from "entities/placemark-trash";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrashRestore } from "react-icons/fa";

import { CircularProgress } from "@chakra-ui/react";
import { pathRoutes } from "shared/config/route-path";
import { Layout } from "widgets/index";
import { trashLevels } from "shared/data/level-trash";
import { ReportItem, useGetReportsQuery } from "entities/report";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imgs = ["fwq", "dqwd", "df", "jyht", "gfbv"];

const PlacemarkPage = () => {
  const { id = 0 } = useParams();
  const navigation = useNavigate();

  const { data, isLoading } = useGetPlacemarkByIdQuery(Number(id));
  const { data: dataReport, isLoading: isLoadingReport } = useGetReportsQuery(
    Number(id)
  );

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

  return (
    <Layout>
      <div className={style.page}>
        <div className={style.slider}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={index + ""} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={style.info}>
          <span>
            <FaUser /> Автор: {data?.nameuser || "неизвестно"}
          </span>
          <span>
            <FaTrashRestore />
            <span>Уровень загрязнения:</span>
            <div
              style={{
                backgroundColor: trashLevels[data?.pullutionLevel || 0].color,
              }}
              className={style.color}
            />
            <span
              className={style.level_trash}
              style={{ color: trashLevels[data?.pullutionLevel || 0].color }}
            >
              - {trashLevels[data?.pullutionLevel || 0].name}
            </span>
          </span>
          <span>
            <FaCalendarAlt /> дата: {data?.date || "неизвестно"}
          </span>
        </div>
        <div className={style.description}>{data?.description}</div>
        <div className={style.reports}>
          {isLoadingReport ? (
            <div className={style.wrapper_loader}>
              <CircularProgress value={80} />
            </div>
          ) : (
            dataReport?.map((item) => <ReportItem key={item.id} {...item} />)
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PlacemarkPage;
