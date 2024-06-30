(function(){const w = window,
/*以下参数可修改，=null表示恢复默认值*/
onlyWifi=true; /*仅在Wifi环境运行*/
w.kbn_setting0=6; /*人物ID*/
w.kbn_setting1=19; /*衣服ID*/
w.kbn_setting2=true; /*是否显示关闭按钮*/
w.kbn_setting3='180x170'; /*看板娘大小*/
w.kbn_setting4='left:5'; /*停靠侧:到侧边距离*/
w.kbn_setting5='160x50'; /*提示框大小*/
w.kbn_setting6='14px'; /*提示框字体大小*/
w.kbn_setting7='-13px'; /*提示框Y轴偏移*/
w.kbn_setting8='18px'; /*工具栏图标大小*/
w.kbn_setting9='36px'; /*工具栏行高*/
w.kbn_setting10='jinrishici.com'; /*一言API可选'fghrsh.net', 'hitokoto.cn', 'jinrishici.com'(古诗词)*/
/*－－－－以下勿改－－－－*/
const key=encodeURIComponent('看板娘:执行判断');if(w[key]||(!(onlyWifi==false)&&navigator.connection.type!='wifi')){return;}try{w[key]=true;const lib=document.createElement('script');lib.src='./js/kbn.js';lib.defer=true;document.body.append(lib);}catch(err){console.log('看板娘：',err);}})();