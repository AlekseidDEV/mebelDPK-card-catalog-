<?
/*получаем свойства в castom_footer*/
$arSelect = Array("ID", "IBLOCK_ID", "NAME");
$arFilter = Array("IBLOCK_ID"=>31, "ID"=>$arElement['ID']);
$res = CIBlockElement::GetList(Array(), $arFilter, false, Array(), $arSelect);

while($ob = $res->GetNextElement()){
  $fields = $ob->GetFields();
  $fields['PROPERTIES'] = $ob->getProperties();
  $arDataElement = $fields;

}/**/
?>


<div class="container_osnov">
    <div class="bitrix_cont_zero">
        <div class="material_block ">
            <h2 class="title_sup_mat green_title">
                Возможные материалы и цвета -
            </h2>
            <h3 class="title_sub_mat grey_title">
                выберете наиболее подходящие для вашего дома
            </h3>
            <div id="swiper1" class="cont_splider splide">
                <div class="splide__track">
                    <div id="delMat" class="wrapper_block_material splide__list">
                        <div class="splide__slide card_material pipe_after card_material_animate">
                            <div class="cont_material">
  
                                <div class="wrapp_cont_mat">
                                    <p class="title_cont_mat mat_width_1">
                                        Цвет каркаса
                                    </p>
  
                                    <p class="text_stock">
                                        На выбор 4 цвета порошковой покраски или воздушной покраски эмалью
                                    </p>
  
  
  
                                    <p class="title_color_typ">
                                        Цвета порошкового покрытия:
                                    </p>
  
                                    <div class="block_powder_color">
                                        <span class="powder_color_type_bl"></span>
                                        <span class="powder_color_type_br"></span>
                                        <span class="powder_color_type_gr"></span>
                                        <span class="powder_color_type_wh"></span>
                                    </div>
  
                                    <p class="title_color_typ">
                                        Цвета эмали:
                                    </p>
  
                                    <div class="block_enamel_color">
                                        <span class="enamel_color_type_bl"></span>
                                        <span class="enamel_color_type_br"></span>
                                        <span class="enamel_color_type_gr"></span>
                                        <span class="enamel_color_type_wh"></span>
                                    </div>
                                </div>
  
  
                                <a href="#" class="diff_btn hover_btn">В чем разница покрытий?</a>
                            </div>
                        </div>
  
                        <div class="splide__slide card_material dpk_after card_material_animate">
                            <div class="cont_material">
                                <div class="wrapp_cont_mat">
  
                                    <p class="title_cont_mat mat_width_2">
                                        Виды и цвета ДПК
                                    </p>
  
                                    <p class="text_stock">
                                        На выбор ассортимент доски из ДПК по цвету и структуре материала
                                    </p>
  
  
  
                                    <p class="title_color_typ">
                                        Цвета ДПК:
                                    </p>
  
                                    <div class="block_dpk_color">
                                        <span class="_color_dpk_1"></span>
                                        <span class="_color_dpk_2"></span>
                                        <span class="_color_dpk_3"></span>
                                    </div>
  
                                    <div class="block_dpk_color">
                                        <span class="_color_dpk_4"></span>
                                        <span class="_color_dpk_5"></span>
                                        <span class="_color_dpk_6"></span>
                                    </div>
  
                                </div>
  
                                <a href="#" class="diff_btn hover_btn">Что такое ДПК?</a>
                            </div>
                        </div>
  
                        <div class="splide__slide card_material kovv_after card_material_animate">
                            <div class="cont_material">
                                <div class="wrapp_cont_mat">
  
                                    <p class="title_cont_mat mat_width_3">
                                        Металлическая обшивка
                                    </p>
  
                                    <p class="text_stock">
                                        На выбор ступени полностью из решетчатого ПВЛ, либо ПВЛ + ДПК
                                    </p>
  
                                    <div class="wrappert_list_pvl">
                                        <div class="block_list_color_riff">
                                            <p class="title_color_typ">Рифленый лист</p>
                                            <span class="list_mettal_1"></span>
                                        </div>
  
                                        <div class="block_list_color_riff">
                                            <p class="title_color_typ">Лист ПВЛ</p>
                                            <span class="list_mettal_2"></span>
                                        </div>
                                    </div>
                                </div>
  
                                <a href="#" class="diff_btn hover_btn">Покрытия в металле</a>
                            </div>
                        </div>
                    </div>
                </div>
  
                <div class="dots_wrapper mat_dt">
  
                </div>
            </div>
        </div>
  
        <div class="ralling_block ">
            <h2 class="title_ralling_block green_title">
                Варианты перил
            </h2>
  
            <div id="swiper2" class="container_rall_swiper cont_splider splide">
                <div class="splide__track">
                    <div id="rallDel" class="card_block_ralling splide__list">
                        <div class="splide__slide card_ralling_options card_material_animate">
                            <div id="slider-1" class="swip_slide ">
  
                                <div>
                                    <p class="title_rall">
                                        Эконом
                                    </p>
                                </div>
  
  
                                <p class="text_stock">
                                    Классические перила из металлического профиля в 3-х исполнениях + поручень из ДПК
                                </p>
  
                                <div class="block_img_rall">
                                    <span class="items_pos"></span>
  
                                    <div class="wrapp_items_slides">
                                        <img class="rall_img active_slide" src="/upload/medialibrary/618/2mbfws6tly8eyot6rgkbey4r61y48qco.png" alt="Перила Эко стандарт">
                                        <img class="rall_img" src="/upload/medialibrary/51c/f6fgn8qrc7o8id50tkxpkd3wjqtqp5x2.png" alt="Перила ЭКО ДПК горизонт">
                                        <img class="rall_img" src="/upload/medialibrary/fe0/6ojezcmzvkvkxlkbatpv0kzrcsixtzqe.png" alt="Перила стандарт с поручнем ДПК">
                                        <img class="rall_img" src="/upload/medialibrary/a6c/ajofghzmh0t8gv4icqt2i5t7odhdxr86.png" alt="Перила ЭКО лофт">
                                    </div>
  
                                    <div class="slide_bar">
  
                                    </div>
  
                                    <div class="block_arrow_img_rall">
                                        <a href="#" class="arrow_green_slide_left"></a>
                                        <a href="#" class="arrow_green_slide_right"></a>
                                    </div>
                                    <p class="pos_char_lest">Прямые</p>
                                </div>
                            </div>
                        </div>
                        <div class="splide__slide card_ralling_options card_material_animate">
                            <div id="slider-2" class="swip_slide ">
  
                                <div>
                                    <p class="title_rall">
                                        Полностью из ДПК
                                    </p>
                                </div>
  
  
                                <p class="text_stock">
                                    Столбы, балясины, поручни и элементы декора из ДПК. Устанавливается на металлический каркас.
                                </p>
  
                                <div class="block_img_rall">
                                    <span class="items_pos"></span>
                                    <div class="wrapp_items_slides">
                                    <img class="rall_img active_slide" src="/upload/medialibrary/618/2mbfws6tly8eyot6rgkbey4r61y48qco.png" alt="Перила Эко стандарт">
                                        <!-- <img class="rall_img active_slide" src="/upload/medialibrary/1f3/n22usatv23hsofluxnmz34dittrg2av2.png" alt="Перила стандарт полностью из ДПК "> -->
                                        <img class="rall_img" src="/upload/medialibrary/490/oblqlvzte3hhckiex3hh193bp5iozx1g.png" alt="Перила полностью из ДПК горизонт">
                                        <img class="rall_img" src="/upload/medialibrary/1db/gde2ifjp5goc6g0ajcrh26br6bc86kzj.png" alt="Перила полностью из ДПК крест">
                                    </div>
                                    <div class="slide_bar">
  
                                    </div>
                                    <div class="block_arrow_img_rall">
                                        <a href="#" class="arrow_green_slide_left"></a>
                                        <a href="#" class="arrow_green_slide_right"></a>
                                    </div>
                                    <p class="pos_char_lest">прямые</p>
                                </div>
                            </div>
                        </div>
                        <div class="splide__slide card_ralling_options card_material_animate">
                            <div id="slider-3" class="swip_slide ">
  
                                <div>
                                    <p class="title_rall">
                                        Кованые
                                    </p>
                                </div>
  
  
                                <p class="text_stock">
                                    Премиальный вариант - кованые перила. Имеются в трех исполнениях: бабочка, корзинка, капля.
                                </p>
  
                                <div class="block_img_rall">
                                    <span class="items_pos"></span>
  
                                    <div class="wrapp_items_slides">
                                    <img class="rall_img active_slide" src="/upload/medialibrary/618/2mbfws6tly8eyot6rgkbey4r61y48qco.png" alt="Перила Эко стандарт">
                                        <!-- <img class="rall_img active_slide" src="/upload/medialibrary/dbf/oq661kw8z4m9c9ktbkrhzbovj2la2ctv.png" alt="Кованные перила капля"> -->
                                        <img class="rall_img" src="/upload/medialibrary/0cf/5mdzm9az1g8xp6sxrw8j52akvpaxvir7.png" alt="Перила ковка Бабочка">
                                        <img class="rall_img" src="/upload/medialibrary/141/phghrhtw7izc3fph9qhf9ah63gkdht6z.png" alt="Кованные перила Корзинка">
                                    </div>
                                    <div class="slide_bar">
  
                                    </div>
                                    <div class="block_arrow_img_rall">
                                        <a href="#" class="arrow_green_slide_left"></a>
                                        <a href="#" class="arrow_green_slide_right"></a>
                                    </div>
                                    <p class="pos_char_lest">Корзинка</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
                <div class="dots_wrapper rall_dt">
  
                </div>
            </div>
  
  
  
            <div class="card_rall_text_block block_swap_dowm">
                <div class="titles_block_rall">
                    <h2 class="title_sup_ralling">
                        Перила
                    </h2>
                    <h3 class="title_sub_ralling">
                        Какие выбрать?
                    </h3>
                </div>
  
                <div class="wrapper_text_rall">
                    <div class="block_texts_rall center_rall_texts">
                        <p class="text_stock">
                            В ассортименте нашей продукции представлено три категории перил: Эконом, Полностью из ДПК, Кованые. Каждая из этих категорий также имеет подвиды.
                        </p>
                        <p class="text_stock">
                            Перила серии Эконом - металлопрофильные перила. Могут быть в трех исполнениях: классические, лофт, крест. Дополнительно можно установить поручень из ДПК.
                        </p>
                    </div>
  
                    <div class="block_texts_rall right_rall_texts">
                        <p class="text_stock">Перила из ДПК отлично подходят для полностью зашитых лестниц. В данном исполнении все элементы перил, включая столбы, балясины и поручни, выполнены из ДПК. Перила из ДПК устанавливаются на металлический каркас.
          </p>
                        <p class="text_stock">Кованые перила относятся к категории премиальных решений. Такие перила имеют высокую прочность и дорогой внешний вид. Доступны в трех исполнениях: бабочка, корзинка, капля. Элементы ковки покрываются патиной.
          </p>
                    </div>
                </div>
  
                <a data-link_block=".wrapper_text_rall" class="link_expand link_expand_rall" href="#">Развернуть</a>
  
  
            </div>
        </div>
  
        <div class="get_catalog_block block_swap_dowm">
            <div class="wrapper_left_get">
                <img class="img_get_cont" src="/img/P4JQJ01 .png" alt="img">
            </div>
            <div class="wrapper_right_get">
                <h2 class="title_get_catalog">
                    Каталог продукции
                </h2>
                <h3 class="title_get_catalog_sub">
                    Отправим на Whats's app
                </h3>
                <p class="text_catalog_get">
                    Получите электронную версию каталога нашей продукции с фотографиями, описанием и полным ассортиментом товаров.
                </p>
  
                <div class="block_form_catalog">
                    <form class="form_catalog">
                        <p class="title_formcatalog">
                            Отправим каталог
                        </p>
  
                        <div class="wrapp_fields_form">
                            <div class="select_file_why">
  
                                <div class="custom-select_block">
                                    <p class="sub_input_title">
                                        Где получить файл?
                                    </p>
  
                                    <div class="options">
                                        <div class="active_option">
                                            <div class="div_wrapp_cont">
                                                <div class="cont_option cont_option_act" data-socials="WhatsApp">
                                                    <img src="/img/Group 18.svg" alt="img" class="option_img">
                                                    <p class="option_desc">Whats’s app</p>
                                                </div>
                                                <a href="#" class="dropp_down"></a>
                                            </div>
                                        </div>
  
                                        <div class="options_list">
                                            <div class="div_wrapp_cont_menu" data-socials="Telegram">
                                                <div class="cont_option">
                                                    <img src="/img/Group 72.svg" alt="img" class="option_img">
                                                    <p class="option_desc">Telegram</p>
                                                </div>
                                            </div>
                                        </div>
  
                                    </div>
                                </div>
  
                            </div>
  
                            <div class="input_block">
                                <p class="sub_input_title">
                                    На какой номер отправить каталог?
                                </p>
                                <input class="input_get_cat" type="tel" name="phone"
                                    placeholder="введите номер телефона">
                            </div>
  
                            <div class="wrapp_btn_get_catalog">
                                <button type="submit" class="get_catalog_btn hover_btn">Получить каталог</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
        <div class="turnkeys_orders_block ">
            <h2 class="title_turn_sup green_title">Позаботимся за Вас о всех мелочах -</h2>
            <h3 class="title_turn_sub grey_title">выполняем заказы под ключ</h3>
  
            <div id="swiper3" class="container_swiper_turn cont_splider splide">
                <div class="splide__track">
                    <div id="turnDel" class="card_block_turn splide__list">
                        <div class="splide__slide card_turn calc card_material_animate">
                            <div class="turn_cont_wrapper">
                                <p class="title_card_turn">
                                    Предварительный<br>
                                    расчет
                                </p>
  
                                <p class="text_card_turn">
                                    БЕСПЛАТНО<br>
                при заказе на сумму от 35.000 р или 3.500 р при заказе до 35.000 р
                                </p>
                            </div>
                        </div>
  
                        <div class="splide__slide card_turn wood card_material_animate">
                            <div class="turn_cont_wrapper">
                                <p class="title_card_turn">
                                    На замер выезжаем с<br>
                                    образцами - БЕСПЛАТНО
                                </p>
  
                                <p class="text_card_turn">
                                    изделия стандартных<br>
                размеров привезем<br>
                без предоплаты
                                </p>
                            </div>
                        </div>
  
                        <div class="splide__slide card_turn card card_material_animate">
                            <div class="turn_cont_wrapper">
                                <p class="title_card_turn">
                                    Заключение договора - <br>
                                    внесение предоплаты 10%
                                </p>
  
                                <p class="text_card_turn">
                                    при заказе<br>
                индивидуальных размеров
                                </p>
                            </div>
                        </div>
  
                        <div class="splide__slide card_turn box card_material_animate">
                            <div class="turn_cont_wrapper">
                                <p class="title_card_turn">
                                    Доставка и монтаж <br>
                                    при необходимости
                                </p>
  
                                <p class="text_card_turn">
                Доставим изделия<br>
                выполним установку
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
  
                <div class="dots_wrapper turn_dots">
  
                </div>
            </div>
  
  
        </div>
  
        <div class="block_choose_us ">
            <h2 class="title_us_sup green_title">
                Почему выбирают нас
            </h2>
            <h3 class="title_us_sub grey_title">
                преимущества наших изделий
            </h3>
  
            <div id="swiper4" class="container_swip_chooce cont_splider splide">
                <div class="splide__track">
                    <div id="chooDel" class="card_block_choose splide__list">
                        <div class="splide__slide chose_obs wrapper_card_choose card_material_animate">
                            <img class="card_choose_" src="/img/39.png" alt="">
                            <div class="cont_ch one">
                                <div class="card_choose">
                                    <p class="title_card_ch">
                                        Заглушки в цвет <br>
                                        на металле и ДПК
                                    </p>
                                    <p class="text_card_ch">
                                        Устанавливаем пластиковые заглушки на металле и заглушки из ДПК на ступенях лестниц.
                                    </p>
                                </div>
                            </div>
                        </div>
  
                        <div class="splide__slide chose_obs wrapper_card_choose card_material_animate">
                            <img class="card_choose_" src="/img/40.png" alt="">
                            <div class="cont_ch two">
                                <div class="card_choose">
                                    <p class="title_card_ch">
                                        Швы на полуавтомате
                                    </p>
                                    <p class="text_card_ch">
                                        Выполняем аккуратные и прочные швы на полуавтоматических сварочных аппаратах.
                                    </p>
                                </div>
                            </div>
                        </div>
  
                        <div class="splide__slide chose_obs wrapper_card_choose card_material_animate">
                            <img class="card_choose_" src="/img/41.png" alt="">
                            <div class="cont_ch free">
                                <div class="card_choose">
                                    <p class="title_card_ch">
                                        Камерная покраска
                                    </p>
                                    <p class="text_card_ch">
                                        Красим наши изделия в профессиональной камере порошковой покраски.
                                    </p>
                                </div>
                            </div>
  
                        </div>
  
                        <div class="splide__slide chose_obs wrapper_card_choose card_material_animate">
                            <img class="card_choose_" src="/img/42.png" alt="">
                            <div class="cont_ch four">
                                <div class="card_choose">
                                    <p class="title_card_ch">
                                        Регулируемые опоры
                                    </p>
                                    <p class="text_card_ch">
                                        Дополнительно устанавливаем регулируемые опоры, чтобы лестница стояла по уровню.
                                    </p>
                                </div>
                            </div>
  
                        </div>
  
                        <div class="splide__slide chose_obs wrapper_card_choose card_material_animate">
                            <img class="card_choose_" src="/img/43.png" alt="">
                            <div class="cont_ch five">
                                <div class="card_choose">
                                    <p class="title_card_ch">
                                        Проушины для крепления <br> с отверстиями
                                    </p>
                                    <p class="text_card_ch">
                                        На наши лестницы мы устанавливаем монтажные пластины с отверстиями для крепления к строению.
                                    </p>
                                </div>
                            </div>
  
                        </div>
  
                        <div class="chose_obs block_text_choose_catch card_material_animate">
                            <h3 class="tit_catch_choose">
                                Воплощаем мечты<br> в реальность.
                            </h3>
                            <p class="tetx_choose_catch">Мы приедем к Вам на замер, произведем качественное изделие с учетом ваших пожеланий и наших рекомендаций, доставим его и смонтируем. С Вас только оплата, об остальном позаботимся мы!</p>
                        </div>
  
                    </div>
                </div>
  
                <div class="dots_wrapper choose_dt">
  
                </div>
            </div>
        </div>
  
  
        <div class="discount_block ">
          <p class="title_disc green_title">Скидки и акции</p>
  
          <div class="card_block_disc block_swap_dowm">
              <div>
                  <img src="/upload/medialibrary/522/bfrvu8c8mesmo4u96ugf276oa83hdd0l.png" alt="img" class="salary_img">
              </div>
              <div class="wrapper_cont_card">
                  <div class="disc_card">
                      <div class="wrapper_cont_disc">
                          <div class="percent_block_">
                              <span class="big_title_card">-3%</span>
                          </div>
  
                          <div class="text_all_dsc">
                              <p class="tit_dick_card">на изделие </p>
                              <p class="txt_dick_card">при заказе доставке и монтажа в будние</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="disc_card">
                      <div class="wrapper_cont_disc null_wrapper">
                          <div class="percent_block_">
                              <span class="big_title_card null">0р</span>
                          </div>
  
                          <div class="text_all_dsc">
                              <p class="tit_dick_card">Бесплатный замер</p>
                              <p class="txt_dick_card">для заказов от 40 000 р</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="disc_card">
                      <div class="wrapper_cont_disc">
                          <div class="percent_block_">
                              <span class="big_title_card">-5%</span>
                          </div>
  
                          <div class="text_all_dsc">
                              <p class="tit_dick_card">на заказ</p>
                              <p class="txt_dick_card">от 100 000 р</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="disc_card_txt">
                         
                              <p class="title_dis_card">
                                  Цена производителя
                              </p>
                              <p class="desc_text_card">
Приобретая товары у нас, вы покупаете напрямую от производителя, без наценок. Более того у нас действует гарантия лучше цены. Нашли стоимость товара дешевле, чем у нас? – предложим цену ниже!
                              </p>
                          
                      </div>
              </div>
          </div>
      </div>
  
  
        <div class="price_calc_block ">
            <div class="obs_calc left_cont_price card_material_animate">
                <h2 class="pr_calc_title">
                    Рассчитаем цену
                </h2>
                <h3 class="pr_calc_title_sub">
                    без выезда замерщика
                </h3>
                <div class="wrapper_adapt_calc_price">
                    <div class="text_calc">
                        <div class="wrapp_calc_text">
                            <div>
                                <p class="text_pr_calc text_stock">
                                    Наши специалисты рассчитают предварительную стоимость нужного вам изделия, пока вы будете разговаривать по телефону. Также мы проведем телефонную консультацию и дадим свои рекомендации, какое изделие лучше выбрать.
                                </p>
                                <p class="text_pr_calc text_stock">
                                    Окончательную стоимость изделия, доставки и монтажных работ озвучим после выезда на замер нашего инженера. Он предложит свои рекомендации по изделию и монтажу, а также продемонстрирует образцы материалов.
                                </p>
                            </div>
                        </div>
  
                        <div class="time_work">
                            <p class="tit_time_work">
                                Мы работаем:
                            </p>
                            <div class="wrapp_time_str">
                                <p class="weekday">
                                    Пн-Сб с 8:00 до 19:00
                                </p>
                                <p class="weekday">
									Вс с 8:00 до 17:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="adapt_block_stub">
  
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="sale_calc_btn hover_btn"><span class="icon_sale_btn"></span>Написать в What’s app</a>
  
            </div>
  
            <div class="obs_calc right_cont_price card_material_animate">
                <div class="stub_img_2"></div>
                <div class="wrapp_sub_text_banners">
                    <p class="text_bann_sup">
                        или звоните нам
                    </p>
                    <p class="number_bann_sub">
                        +7 (926)-751-85-59
                    </p>
                </div>
            </div>
        </div>
  
        <div class="factory_prod_block ">
            <h2 class="factory_title green_title">
                Заводское производство
            </h2>
            <h3 class="factory_title_sub grey_title">
                профессиональный подход
            </h3>
  
            <div class="block_cont_factory">
                <div id="slider-4" class="obs_factory block_img_factory card_material_animate">
  
                    <div class="wrapper_arrow_ ">
                        <p class="happ_photo_text">Цех сборки лестниц</p>
                        <div id="altslider" class="splide">
                            <div class="splide__track">
                                <div class="splide__list">
                                    <img src="/upload/medialibrary/ddf/rv38qqfo3jmzpr6z49d2ituvypg9medl.png" alt="Цех сборки лестниц" class="splide__slide">
                                    <img src="/upload/medialibrary/41b/bn95w2lp5wv71ljtk20qgs78csk2muma.png" alt="Покрасочная камера" class="splide__slide">
                                    <img src="/upload/medialibrary/39c/g23ieysrgmhe35rvwsjmen1cyek54mi1.png" alt="Сварка лестниц" class="splide__slide">
                                    <img src="/upload/medialibrary/772/78vwk8w2qf1g7q23mc0fiemim4ylwdu2.png" alt="Сварка лестниц" class="splide__slide">
                                </div>
                            </div>
                        </div>
                        <div class="block_arrow_img_fac">
                            <a href="#" class="arrow_grey_slide_left"></a>
                            <a href="#" class="arrow_grey_slide_right"></a>
                        </div>
                    </div>
                    <div class="slide_bar">
  
                    </div>
  
                    <p class="tit_factory_img">
                        Собственное производство полного цикла
                    </p>
                    <div class="div_text div_text_factory">
                        <p class="text_stock">
                            Мы - компания, имеющая серьезный и профессиональный подход к вопросам производства. Наш завод имеет несколько производственных цехов общей площадью 1800 м2, включая сварные цеха, покрасочные камеры, сборочный цех и складские помещения.
                        </p>
                        <p class="text_stock">Мы работаем на современном оборудовании, позволяющем выполнять изделия высокого качества. В нашем распоряжении: промышленные сварочные полуавтоматы, станок зачистки коррозии металла, камера порошковой покраски.</p>
                    </div>
                    <a data-link_block=".div_text_factory" href="#"
                        class="link_expand ex_ona_factory">Развернуть</a>
                </div>
  
                <div id="slide-5" class="obs_factory block_factory_video card_material_animate">
  
                    <div class="link_play_wrapper">
                        <div class="wrapp_items_slides">
						<iframe width="480" height="270" src="https://dzen.ru/embed/v_Lf9CiguqAQ?from_block=partner&from=zen&mute=0&autoplay=0&tv=0" allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media" frameborder="0" scrolling="no" allowfullscreen class="adapt_stub_image active_slide"></iframe>
						<iframe width="480" height="270" src="https://dzen.ru/embed/vaz1atPCZHAY?from_block=partner&from=zen&mute=0&autoplay=0&tv=0" allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media" frameborder="0" scrolling="no" allowfullscreen class="adapt_stub_image "></iframe>
						<iframe width="480" height="270" src="https://dzen.ru/embed/vAxA04d1mHws?from_block=partner&from=zen&mute=0&autoplay=0&tv=0" allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media" frameborder="0" scrolling="no" allowfullscreen class="adapt_stub_image "></iframe>
                        </div>
  
                        <?/* <a href="#" class="link_play_factory"></a> */?>
                        
                            <a href="#" class="arrow_green_slide_left"></a>
                            <a href="#" class="arrow_green_slide_right"></a>
                       
                        <div class="slide_bar">
  
                        </div>
                    </div>
                    <div id="" class="div_text margin-top_class div_text_factory_">
                        <p class="text_stock">
                          Для всех посетителей у нас открыт магазин при производстве с большим шоурумом 600 м2. Вы можете приехать к нам, ознакомиться с выставкой готовой продукции, определиться, что именно больше подходит вам, и убедиться лично в нашей компетентности в своем деле. 	
                        </p>
                        <p class="text_stock">Офис продаж тоже находится при производстве, поэтому сразу после ознакомления с образцами моделей изделий в нашем шоуруме и получения консультаций, вы сможете оформить заказ на производство у наших специалистов отдела продаж.</p>
  
                    </div>
                    <a data-link_block=".div_text_factory_" href="#"
                        class="link_expand ex_two_factory">Развернуть</a>
                </div>
            </div>
  
        </div>
  
        <div class="block_sertificate ">
            <div class="wrapper_block_sertif">
                <div class="obs_sert wrapp_img_sert card_material_animate">
                    <img src="/img/sertif.png" alt="img" class="img_serf">
                </div>
  
                <div class="obs_sert block_cont_sert card_material_animate">
                    <h2 class="title_sert">
                        Наша продукция<br> сертифицирована<br>
                        по ГОСТ
                    </h2>
                    <h3 class="sub_title_sert">
                        Товар со знаком качества
                    </h3>

                    <div class="img_serf_cont">
  
                    </div>
  
                    <div class="img_sert_small">
                        <img src="/img/smallSert.png" alt="img" class="img_smal_sert">
                    </div>
  
                    <div class="div_text div_cust_1">
                        <p class="text_stock">Наши изделия прошли государственную сертификацию качества. Они выдерживают высокие весовые нагрузки и хорошо защищены от воздействия агрессивной атмосферной среды.</p>
                        <p class="text_stock">На все наши изделия распространяется письменная гарантия качества сроком на два года. Мы уверены в надежности и долговечности наших товаров!</p>
                    </div>


                    <p class="guarantee">Гарантия 2 года</p>
                </div>
            </div>
        </div>
  
        <div class="exampl_work_block ">
            <h2 class="title_exam green_title">Примеры наших работ -</h2>
            <h3 class="title_exam_sub grey_title">
                так выглядят лестницы в экстерьере
            </h3>
			
<div class="anim_swap block_swap_dowm">

<div class="block_project_card ">
	
<?

foreach($arDataElement["PROPERTIES"]["PROJ_SMOLL"]["VALUE"] as $key1 => $elemProp){
$key1++;

$arSelect2 = Array("ID", "IBLOCK_ID", "NAME","PREVIEW_TEXT","DETAIL_TEXT");
$arFilter2 = Array("IBLOCK_ID"=>36, "ID"=>$elemProp);
$res2 = CIBlockElement::GetList(Array(), $arFilter2, false, Array(), $arSelect2);

	while($ob2 = $res2->GetNextElement()){
	  $fields2 = $ob2->GetFields();
	  $fields2['PROPERTIES'] = $ob2->getProperties();
	  $arDataElement2 = $fields2;

	}

?>	

<div id="touch-<?echo $key1;?>" class="project_card mouseSlider">
    <div id="spliper<?echo $key1;?>" name="swipersTouch" class="splide">
        <div class="width_items touchOne splide__track">
            <div class="track_slids splide__list">

				<?
				
				foreach($arDataElement2["PROPERTIES"]["BANNER_CHAR_PHOTOS"]["VALUE"] as $key2 => $elem){ //вывод фото 

					$img = CFile::ResizeImageGet(
							$elem,
							Array("width"=>360, "height"=>480),
							BX_RESIZE_IMAGE_EXACT
							);
				?>
                <img src="<?=$img["src"]?>" alt="img" class="splide__slide img_card_proj <?if($key2 == 0){echo "active_touch";}?>">
				<? } ?>

                <div class="chumb_project">
                </div>
				
            </div>

        </div>
        <div class="slide_bar touch_bar_one">
        </div>
    </div>
    <div class="wrapp_cont_proj">
        <div class="block_cont_text_proj">
            <p class="title_proj_cont">
                <?=$arDataElement2["NAME"]?>
            </p>

<?=$arDataElement2["PREVIEW_TEXT"];?>

        </div>

        <div class="wrapper_price_project">
            <p class="price_project">Стоимость: <?=$arDataElement2["PROPERTIES"]["PRICE_CAT"]["VALUE"];?></p>
        </div>
    </div>
</div>

<? } 
	 ?>

</div>


<?

$elemProp3 = $arDataElement["PROPERTIES"]["PROJ_BIG"]["VALUE"];

$arSelect3 = Array("ID", "IBLOCK_ID", "NAME","PREVIEW_TEXT","DETAIL_TEXT");
$arFilter3 = Array("IBLOCK_ID"=>36, "ID"=>$elemProp3);
$res3 = CIBlockElement::GetList(Array(), $arFilter3, false, Array(), $arSelect3);

	while($ob3 = $res3->GetNextElement()){
	  $fields3 = $ob3->GetFields();
	  $fields3['PROPERTIES'] = $ob3->getProperties();
	  $arDataElement3 = $fields3;
	}	
	
	
?>	
  
              <div id="touch-3" name="swipersTouch" class="div_big_card_block mouseSlider">
                  <div name="big" id="spliper3" class="wrapper_img_block">
                      <div class="track_slids width_items_big">

							<?
							
							foreach($arDataElement3["PROPERTIES"]["BANNER_CHAR_PHOTOS"]["VALUE"] as $key3 => $elem3){ // вывод фото
								$img3 = CFile::ResizeImageGet(
										$elem3,
										Array("width"=>1000, "height"=>600),
										BX_RESIZE_IMAGE_EXACT
										);
							?>
							<img src="<?=$img3["src"]?>" alt="img" class="card_big_img<?if($key3 == 0){echo " active_touch";}?>">
							<? } ?>
  
                          <div class="chumb_project">
  
                          </div>
                      </div>
                      <div class="slide_bar">
  
                      </div>
                  </div>
                  <div class="wrapp_cont_proj">
                      <div class="block_cont_text_proj">
                          <p class="title_proj_cont">
                              <?=$arDataElement3["NAME"];?>
                          </p>
  
<?=$arDataElement3["PREVIEW_TEXT"];?>

                      </div>
  
                      <div class="wrapper_price_project">
                          <p class="price_project">Стоимость: <?=$arDataElement3["PROPERTIES"]["PRICE_CAT"]["VALUE"];?></p>
                      </div>
                  </div>
              </div>
	
			 
			  
          </div>
  
            <div class="wrapp_all_proj">
                <a href="/lookbooks/" class="btn_all_proj hover_btn">Все проекты</a>
            </div>
        </div>

        <div class="think_about_us ">
            <h2 class="title_think green_title">
                Что о нас думают
            </h2>
            <div class="wrapper_cont_think">
                <div class="obs_think cont_think card_material_animate">
                    <div class="video_think">
                        <img src="/img/Rectangle 51.png" alt="img" class="img_think_vid">
                    </div>
                    <div class="block_text_vid_think">
                        <div class="titles_think">
                            <h2 class="title_vid_thin">
                                Довольные
                            </h2>
                            <h3 class="sub_title_vid_thin">
                                покупатели
                            </h3>
                        </div>
                        <div class="texts_think">
                            <p class="text_stock text_stock_cst">
                                О качестве работы любой компании лучше всего говорят отзывы клиентов. И нам в данном вопросе краснеть не приходится. За годы работы мы получили большое количество живых отзывов с фото от наших довольных клиентов.
                            </p>
                            <p class="text_stock text_stock_cst">
                                Вы можете и сами убедиться в нашем профессионализме, почитав отзывы наших покупателей на сервисе Я.Бизнес. Наш рейтинг в Яндексе – 4.9 из 5 баллов. Мы работаем на совесть и для людей!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="obs_think reviews_block card_material_animate">
                    <iframe src="https://yandex.ru/maps-reviews-widget/1694833121?comments"></iframe>
                </div>
            </div>
        </div>
  
        <div class="social_up_block ">
            <h2 class="title_up green_title">
                Мы в социальных сетях
            </h2>
  
            <div class="block_social_link block_swap_dowm">
                <div class="wrapp_soc_sup">
                    <a href="www.youtube.com/@mebeldpk" class="soc_link">
                        <img class="you width_big" src="/img/you.svg" alt="img">
                    </a>
  
                    <a href="https://t.me/mebeldpk" class="soc_link">
                        <img class="you width_small" src="/img/telega.svg" alt="img">
                    </a>
  
                    <a href="https://dzen.ru/mebeldpk" class="soc_link">
                        <img class="you width_small" src="/img/dzen.svg" alt="img">
                    </a>
                </div>
                <div class="wrapp_soc_sub">
                    <a href="https://vk.com/mebeldpk" class="soc_link">
                        <img class="you width_small" src="/img/vk.svg" alt="img">
                    </a>
                    <a href="https://rutube.ru/channel/25818715/" class="soc_link">
                        <img class="you width_big_rut" src="/img/rutube.svg" alt="img">
                    </a>
                    <a href="https://m.ok.ru/group/63168510623917" class="soc_link">
                        <img class="you width_small" src="/img/odn.svg" alt="img">
                    </a>
                </div>
            </div>
  
        <p class="sub_cont_text_up green_title">
            подписывайтесь и получайте уникальные персональные скидки
        </p>
  
        <div id="slide-6" class="block_our_worker ">
  
            <h2 class="tit_worker green_title">
                Наши сотрудники -
            </h2>
            <h3 class="tit_sub_worker grey_title">
                Наша гордость
            </h3>
  
  
            <div class="wrap_text block_swap_dowm">
                <div class="block_slider_text">
                    <div class="wrapper_text_slide">
                        <div class="item_slider_text">
                            <p class="text_stock our_text_cust">
                                Мы твердо убеждены в том, что сотрудники – это самый ценный и главный ресурс любой компании. Так и у нас – тот, кто однажды пришел к нам работать, остается с нами надолго. Именно поэтому у нас трудятся кадры с многолетним стажем работы и абсолютными знаниями в своей сфере деятельности!
                            </p>
                        </div>
                        <div class="item_slider_text">
                            <p class="text_stock our_text_cust">
                                Наши сотрудники всегда вежливы и профессиональны при общении с клиентом. Это касается не только специалистов отдела продаж, но и монтажников и водителей. Мы не навязываем ненужных товаров или услуг и не обманываем людей! Мы работаем честно, профессионально и на совесть!
                            </p>
                        </div>
                    </div>
  
                    <div class="wrapper_our_slide_arr">
                        <a href="#" class="link_slide_our"></a>
                        <a href="#" class="link_slide_our_right"></a>
                    </div>
                </div>
            </div>
  
            <div class="carousel-progress">
                <div class="progress_bar_worker">
  
                </div>
            </div>
  
            <div id="worker-slider" class="block_card_work splide">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide worker_card manager card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/3f5/h2hbb8jjdetd0dm29lns03ppdal81odq.jpg" alt="img">
                                <p class="naming_worker">
                                    Алексей
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">  
                              руководитель ОП, опыт 7 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Контроль работы ОП, документооборот, ведение сложных объектов.
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                +7 (926) 751-85-59
                                            </p>
                                        </div>

                                        <div class="social_conn">
                                            <a href="tg://resolve?domain=MebelDPK" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card manager card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/7fb/nub1vyqjky0lcwemkn8k5su30ao5cps6.png" alt="img">
                                <p class="naming_worker">
                                    Антон
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">  
                              старший специалист ОП, опыт 4 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Консультация по товарам, сопровождение сделок, маркетплейсы.
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                +7 (926) 751-85-59
                                            </p>
                                        </div>

                                        <div class="social_conn">
                                            <a href="tg://resolve?domain=MebelDPK" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="manager" class="splide__slide manager worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/81a/1c3b046z7a6vzd7mn1ru51wkkpdvwhyy.png" alt="img">
                                <p class="naming_worker">
                                    Сергей
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">    
                              специалист ОП, опыт 2 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Консультация по товарам, сопровождение сделок.
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                +7 (926) 751-85-59
                                            </p>
                                        </div>

                                        <div class="social_conn">
                                            <a href="tg://resolve?domain=MebelDPK" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div id="manager" class="splide__slide manager worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/cf0/itd7o0l104fmli1ku6k4qi07thmjgauz.png" alt="img">
                                <p class="naming_worker">
                                    Игорь
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">    
                             специалист ОП, опыт 3 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Консультация по товарам, сопровождение сделок.
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                +7 (926) 751-85-59
                                            </p>
                                        </div>

                                        <div class="social_conn">
                                            <a href="tg://resolve?domain=MebelDPK" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/c84/yhwn9qfz4g34t8ni6tb5p896yhmsu3f6.jpg" alt="img">
                                <p class="naming_worker">
                                    Константин
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">  
                              начальник производства, опыт 8 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Контроль производства, решение технических вопросов
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                   <!--<div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/a90/0a4suj8oqxsa8h7sf3a2m4t12fxtjvmz.png" alt="img">
                                <p class="naming_worker">
                                   Александр
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                  
                              начальник цеха, опыт 5 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Контроль качества, складской учет, выдача заказов
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                       <!-- <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/b00/8wtnntba9oesdk2n6hhc0dm5jf474w9n.png" alt="img">
                                <p class="naming_worker">
                                   Сергей
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                  
                              бригадир-монтажник, опыт 6 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Руководство монтажной группой, замерщиками
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                        <!--<div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/a3b/wurcts082xoc5dtp3za6swum25jzvr4d.png" alt="img">
                                <p class="naming_worker">
                                   Дмитрий
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                  
                              монтажник, опыт 4 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Проведение монтажных работ любой сложности
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                       <!-- <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/95d/cdmhbx4lo00fjnixgvz3cghwwwi201q7.png" alt="img">
                                <p class="naming_worker">
                                   Эдуард
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                  
                             начальник бригады, опыт 20 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Эксперт в сфере строительных работ, мастер замеров
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                        <!--<div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/fe4/u2aemodugj7yrqk52d9t4ysrq2qooisj.jpg" alt="img">
                                <p class="naming_worker">
                                   Дмитрий
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                  
                             it-специалист, опыт 4 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Разработка и продвижение сайтов
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                       <!-- <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
						
						<div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/ec1/u9f8ughxr5xl6xesnmmk890mqlmhumc4.jpg" alt="img">
                                <p class="naming_worker">
                                    Денис
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                               
                              SMM-специалист, опыт 4 года
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Рассказывает о нас в социальных сетях
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                       <!-- <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/37b/uu9gh7doxuiu1mgt54v89x0ugz5oe71k.jpg" alt="img">
                                <p class="naming_worker">
                                    Георгий
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">                         
                              коммерческий директор, опыт 7 лет
                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Контролирует, чтобы все было честно
                                    </p>

                                    <div class="block_connection__worker">
                                        <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                       <!-- <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="splide__slide worker_card card_material_animate">

                            <div class="wrapper_naming">
                                <img src="/upload/medialibrary/e92/gubzhgj4pjcq6mck5k0mzmfu239rz7vs.jpg" alt="img">
                                <p class="naming_worker">
                                    Матвей
                                </p>
                            </div>

                            <div class="cont_worker_card">
                                <p class="title_card_worker">              
                              директор по развитию, опыт 6 лет

                                </p>
                                <div class="info_cont_card">
                                    <p class="text_worker_card">
                                        Разрабатывает новые модели, вдохновляет производство
                                    </p>

                                    <div class="block_connection__worker">
                                       <div class="conn_phone">
                                            <p class="tit_conn">
                                                Как связаться:
                                            </p>
                                            <p class="tit_phone_conn">
                                                —
                                            </p>
                                        </div>

                                      <!--   <div class="social_conn">
                                            <a href="#" class="link_tel"></a>
                                            <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                        </div>-->
                                    </div> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  
        <div class="block_tabs_question ">
  
            <h2 class="tit_worker_que green_title">
                Отвечаем на вопросы, 
            </h2>
            <h3 class="tit_sub_worker_que grey_title">
                которые часто задают заказчики
            </h3>
  
            <div class="block_tab_cont block_swap_dowm">
                <div class="tabs_all_list">
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn _active_link">Сколько времени занимает изготовление
                            лестницы?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Какая гарантия на лестницы?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">В чем особенности изготовления и монтажа лестницы на
                            каркасе из металла?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Как рассчитать высоту ступенек для лестниц?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Можно ли заказать только каркас лестницы под
                            самостоятельную отделку в Москве?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Что удобнее: прямые маршевые лестницы с площадками или
                            забежными ступенями?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">На каком этапе строительства лучше заказывать лестницу на
                            металлическом каркасе?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Какая высота перил считается безопасной?</a>
                    </div>
                    <div class="wrapper_links_answ">
                        <a href="#" class="link_tabs_btn">Стоит ли заказывать в дом лестницу с обшивкой из дерева? И
                            почему?</a>
                    </div>
                </div>
                <div class="container_answer">
                    <div class="tab_info_cont active_tb">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Сколько времени занимает изготовление лестницы?
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
									Стандартный срок изготовления лестницы 10-14 дней, но в некоторых случаях срок изготовления может занимать 5-7 дней.
                                </p>
                                <p class="text_stock quest_text_cust">
                                   
                                </p>
                            </div>
                        </div>
                        <div class="img_tab_">
                            <img src="/upload/medialibrary/3f5/h2hbb8jjdetd0dm29lns03ppdal81odq.jpg" alt="img" class="worker_tabs_img">
                            <p class="name_worker">Алексей</p>
                            <p class="job">
                                руководитель ОП, опыт 7 лет
                            </p>
                            <div class="block_connection__worker">
                                <div class="conn_phone">
                                    <p class="tit_conn">
                                        Как связаться:
                                    </p>
                                    <p class="tit_phone_conn">
                                        +7 (499) 226-00-24
                                    </p>
                                </div>
  
                                <div class="social_conn">
                                    <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_wats"></a>
                                </div>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Какая гарантия на лестницы?
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7 (499) 226-00-24</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Гарантийный срок составляет 2 года с момента покупки товара. 
                                </p>
                                <p class="text_stock quest_text_cust">

                                </p>
                            </div>
                        </div>
                    </div>
  
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                В чем особенности изготовления и монтажа лестницы на каркасе из металла?  
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Металлический каркас изготавливается из профиля 20*20, 40*20 или 40*40 на полуавтоматической сварке, что делает сварные швы надежными и эстетичными. Срок эксплуатации более 20 лет. Монтаж лестницы подразумевает под собой разгрузку изделия и установку на регулируемые опоры при условии, что у Вас есть твердое основание. Если основание - почва, то установка будет происходить на забивные сваи из профиля 60*60. По желанию клиента изделие также можно прикрутить к строению.
                                </p>
                                <p class="text_stock quest_text_cust">

                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Как рассчитать высоту ступенек для лестниц? 
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    По СНиПу высота одной ступеньки должна быть в диапазоне от 150 мм до 200 мм., но обращаем внимание: высота одной ступеньки более, чем 185 мм, считается менее комфортной. Высоту ступенек можно рассчитать следующим образом: общую высоту поделить на 170 мм. Пример: 1000 мм/ 170 мм = 5,88 ступенек. Соответственно в таком случае нужно сделать 6 ступеней. 
                                </p>
                                <p class="text_stock quest_text_cust">

                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Можно ли заказать только каркас лестницы под самостоятельную отделку?
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Конечно, мы изготавливаем каркасы лестниц в кратчайшие сроки. Вы можете приобрести у нас только каркас лестницы и облицевать его самостоятельно своим материалом.
                                </p>
                                <p class="text_stock quest_text_cust">

                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Что удобнее: прямые маршевые лестницы с площадками или забежными ступенями? 
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Для улицы намного удобнее прямые маршевые лестницы с площадками. Что касается забежных ступеней - они используются в основном для лестниц внутри дома, где возможные габариты лестницы ограничены пространством дома.
                                </p>
                                <p class="text_stock quest_text_cust">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                На каком этапе строительства лучше заказывать лестницу на металлическом каркасе?
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Это абсолютно неважно, её можно установить на этапе стройки, либо на финишном этапе. Никаких ограничений в этом вопросе нет.
                                </p>
                                <p class="text_stock quest_text_cust">

                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Какая высота перил считается безопасной?
                            </p>
                            <p class="quest_tit">
                                Отвечает Алексей, руководитель ОП
                            </p>
  
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Высота перил 950 мм считается самой безопасной и удобной для пользования по СНиПу. Но отступить от стандарта по 20-30 мм в любую из сторон не запрещено. 
                                </p>
                            </div>
                        </div>
                    </div>
  
                    <div class="tab_info_cont ">
                        <div class="text_tab_">
                            <p class="ask_tit">
                                Стоит ли заказывать крыльцо с обшивкой из дерева?
                            </p>
                            <div class="mobile_tit_block">
                                <div class="wrapper_defend">
                                    <p class="mob_defend">отвечает</p>
                                    <p class="mob_name_dafend">Фамилия Имя</p>
                                    <p class="mob_tel_defend">+7-977-858-85-87</p>
                                </div>
                                <img src="/img/Ell4.svg" alt="img">
                            </div>
  
                            <div class="wrapper_quest">
                                <p class="text_stock quest_text_cust">
                                    Любое деревянное покрытие лестницы требует деликатного обращения и регулярного ухода. При покупке лестницы из ДПК Вы не столкнетесь с такими проблемами, как выцветание, тресканье на морозе, повреждение лакокрасочного покрытия, гниение от влаги. Доска ДПК же имеет срок службы более 30 лет и абсолютно не боится атмосферных воздействий.
                                </p>
                                <p class="text_stock quest_text_cust">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="still_quest ">
            <div class="stil_block_text">
                <h2 class="title_stil">
                    Хотите купить лестницу, но остались вопросы?
                </h2>
                <p class="text_still">
                    Напишите нам в любом удобном мессенджере
                </p>
            </div>
            <div class="wrapper_btn_what">
                <a href="https://api.whatsapp.com/send?phone=89267616799" target="_blank" rel="noopener noreferrer" class="link_whats_sqw"></a>
            </div>
        </div>
  
    </div>
  </div>
