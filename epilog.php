<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
	__IncludeLang($_SERVER["DOCUMENT_ROOT"].$templateFolder."/lang/".LANGUAGE_ID."/template.php");

use Bitrix\Main\Loader,
	Bitrix\Main\ModuleManager,
	Bitrix\Main\Localization\Loc;

global $arTheme, $arRegion;


$arScripts = ['swiper', 'swiper_main_styles', 'swiper_events', 'hash_location', 'tabs_history', 'countdown'];
if (isset($templateData['OUT_OF_PRODUCTION']) && $templateData['OUT_OF_PRODUCTION']['SHOW_ANALOG']) {
	$arScripts[] = 'out_of_production';
}
if (isset($templateData['CHARACTERISTICS']) && $templateData['CHARACTERISTICS'] && $arTheme["GRUPPER_PROPS"]["VALUE"] == "ASPRO_PROPS_GROUP") {
	$arScripts[] = 'propertygroups';
}
if (isset($templateData['JS_OBJ'])) {
	$arScripts[] = 'ikSelect';
}
if ($bShowAdditionalGallery) {
	$arScripts[] = 'gallery_small';
}

\Aspro\Max\Functions\Extensions::init($arScripts);
?>
<script>typeof useCountdown === 'function' && useCountdown()</script>