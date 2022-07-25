const Key = '936260791b7984958ff84b74b57a1330'
        var TiandiMap_img = new ol.layer.Tile({
            title: "天地图影像图层",
            source: new ol.source.XYZ({
                url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=06b6b0a414b9f91bba4a497337126c2a",//parent.TiandituKey()为天地图密钥,
                wrapX: false
            })
        });
        var TiandiMap_vec = new ol.layer.Tile({
            title: "天地图矢量图层",
            source: new ol.source.XYZ({
                url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=06b6b0a414b9f91bba4a497337126c2a",//parent.TiandituKey()为天地图密钥,
                wrapX: false
            })
        });
        var TiandiMap_cva = new ol.layer.Tile({
            title: "天地图矢量注记图层",
            source: new ol.source.XYZ({
                url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=06b6b0a414b9f91bba4a497337126c2a",//parent.TiandituKey()为天地图密钥
            })
        });