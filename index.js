/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

require("./src/index");
// const {
//   SpinalContextApp,
//   spinalContextMenuService
// } = require('spinal-env-viewer-context-menu-service');
// const circularMenuHookName = 'circularMenu';

// class BtnGetParams extends SpinalContextApp {
//   constructor() {
//     super('getProps', 'get props', {
//       icon: 'description',
//       icon_type: 'in',
//       backgroundColor: '#356BAB',
//       fontColor: '#FFFFFF'
//     });
//   }

//   isShown(option) {
//     return Promise.resolve(true);
//   }
//   action(option) {
//     NOP_VIEWER.getProperties(
//       NOP_VIEWER.getAggregateSelection()[0].selection[0],
//       (props) => {
//         copyToClip(JSON.stringify(props.properties));
//         alert("Propteries are copied clipboard, for a simple view paste it https://json-csv.com/");
//       });
//   }
// }
// spinalContextMenuService.registerApp(
//   circularMenuHookName,
//   new BtnGetParams(),
//   [7]
// );
