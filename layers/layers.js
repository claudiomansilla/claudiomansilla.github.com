var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 0.526000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_todoelpartidodesdeexctodoelpartido_1 = new ol.format.GeoJSON();
var features_todoelpartidodesdeexctodoelpartido_1 = format_todoelpartidodesdeexctodoelpartido_1.readFeatures(json_todoelpartidodesdeexctodoelpartido_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_todoelpartidodesdeexctodoelpartido_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_todoelpartidodesdeexctodoelpartido_1.addFeatures(features_todoelpartidodesdeexctodoelpartido_1);
var lyr_todoelpartidodesdeexctodoelpartido_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_todoelpartidodesdeexctodoelpartido_1, 
                style: style_todoelpartidodesdeexctodoelpartido_1,
                interactive: true,
                title: '<img src="styles/legend/todoelpartidodesdeexctodoelpartido_1.png" /> todo el partido desde exc — todoelpartido'
            });
var format_HIPODROMO_2 = new ol.format.GeoJSON();
var features_HIPODROMO_2 = format_HIPODROMO_2.readFeatures(json_HIPODROMO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIPODROMO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIPODROMO_2.addFeatures(features_HIPODROMO_2);
var lyr_HIPODROMO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIPODROMO_2, 
                style: style_HIPODROMO_2,
                interactive: true,
                title: '<img src="styles/legend/HIPODROMO_2.png" /> HIPODROMO'
            });
var format_UEac_3 = new ol.format.GeoJSON();
var features_UEac_3 = format_UEac_3.readFeatures(json_UEac_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UEac_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UEac_3.addFeatures(features_UEac_3);
var lyr_UEac_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UEac_3, 
                style: style_UEac_3,
                interactive: true,
                title: '<img src="styles/legend/UEac_3.png" /> UE ac'
            });
var format_ReL_4 = new ol.format.GeoJSON();
var features_ReL_4 = format_ReL_4.readFeatures(json_ReL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReL_4.addFeatures(features_ReL_4);
var lyr_ReL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReL_4, 
                style: style_ReL_4,
                interactive: true,
                title: '<img src="styles/legend/ReL_4.png" /> ReL'
            });
var format_I1_5 = new ol.format.GeoJSON();
var features_I1_5 = format_I1_5.readFeatures(json_I1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_I1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_I1_5.addFeatures(features_I1_5);
var lyr_I1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_I1_5, 
                style: style_I1_5,
                interactive: true,
                title: '<img src="styles/legend/I1_5.png" /> I1'
            });
var format_I2i2_6 = new ol.format.GeoJSON();
var features_I2i2_6 = format_I2i2_6.readFeatures(json_I2i2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_I2i2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_I2i2_6.addFeatures(features_I2i2_6);
var lyr_I2i2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_I2i2_6, 
                style: style_I2i2_6,
                interactive: true,
                title: '<img src="styles/legend/I2i2_6.png" /> I2 — i2'
            });
var format_Q1_7 = new ol.format.GeoJSON();
var features_Q1_7 = format_Q1_7.readFeatures(json_Q1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q1_7.addFeatures(features_Q1_7);
var lyr_Q1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Q1_7, 
                style: style_Q1_7,
                interactive: true,
                title: '<img src="styles/legend/Q1_7.png" /> Q1'
            });
var format_ReEV_8 = new ol.format.GeoJSON();
var features_ReEV_8 = format_ReEV_8.readFeatures(json_ReEV_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReEV_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReEV_8.addFeatures(features_ReEV_8);
var lyr_ReEV_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReEV_8, 
                style: style_ReEV_8,
                interactive: true,
                title: '<img src="styles/legend/ReEV_8.png" /> ReEV'
            });
var format_REX3_9 = new ol.format.GeoJSON();
var features_REX3_9 = format_REX3_9.readFeatures(json_REX3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REX3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REX3_9.addFeatures(features_REX3_9);
var lyr_REX3_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REX3_9, 
                style: style_REX3_9,
                interactive: true,
                title: '<img src="styles/legend/REX3_9.png" /> REX3'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_todoelpartidodesdeexctodoelpartido_1.setVisible(true);lyr_HIPODROMO_2.setVisible(true);lyr_UEac_3.setVisible(true);lyr_ReL_4.setVisible(true);lyr_I1_5.setVisible(true);lyr_I2i2_6.setVisible(true);lyr_Q1_7.setVisible(true);lyr_ReEV_8.setVisible(true);lyr_REX3_9.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_todoelpartidodesdeexctodoelpartido_1,lyr_HIPODROMO_2,lyr_UEac_3,lyr_ReL_4,lyr_I1_5,lyr_I2i2_6,lyr_Q1_7,lyr_ReEV_8,lyr_REX3_9];
lyr_todoelpartidodesdeexctodoelpartido_1.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_HIPODROMO_2.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_UEac_3.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_ReL_4.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_I1_5.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_I2i2_6.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_Q1_7.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_ReEV_8.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_REX3_9.set('fieldAliases', {'fid': 'fid', 'PARTIDA': 'PARTIDA', 'SUPERF.': 'SUPERF.', 'AREA': 'AREA', 'ZONA': 'ZONA', 'F.O.S.': 'F.O.S.', 'F.O.T.': 'F.O.T.', 'DENS.': 'DENS.', 'PLANO LIM.': 'PLANO LIM.', 'RETIROS': 'RETIROS', });
lyr_todoelpartidodesdeexctodoelpartido_1.set('fieldImages', {'fid': 'TextEdit', 'PARTIDA': 'Range', 'SUPERF.': 'TextEdit', 'AREA': 'TextEdit', 'ZONA': 'TextEdit', 'F.O.S.': 'TextEdit', 'F.O.T.': 'TextEdit', 'DENS.': 'TextEdit', 'PLANO LIM.': 'TextEdit', 'RETIROS': 'TextEdit', });
lyr_HIPODROMO_2.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_UEac_3.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_ReL_4.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_I1_5.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_I2i2_6.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_Q1_7.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_ReEV_8.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_REX3_9.set('fieldImages', {'fid': '', 'PARTIDA': '', 'SUPERF.': '', 'AREA': '', 'ZONA': '', 'F.O.S.': '', 'F.O.T.': '', 'DENS.': '', 'PLANO LIM.': '', 'RETIROS': '', });
lyr_todoelpartidodesdeexctodoelpartido_1.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_HIPODROMO_2.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_UEac_3.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_ReL_4.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_I1_5.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_I2i2_6.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_Q1_7.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_ReEV_8.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_REX3_9.set('fieldLabels', {'fid': 'no label', 'PARTIDA': 'no label', 'SUPERF.': 'no label', 'AREA': 'no label', 'ZONA': 'no label', 'F.O.S.': 'no label', 'F.O.T.': 'no label', 'DENS.': 'no label', 'PLANO LIM.': 'no label', 'RETIROS': 'no label', });
lyr_REX3_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});