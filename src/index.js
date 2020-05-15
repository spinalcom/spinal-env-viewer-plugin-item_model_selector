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

import Vue from 'vue';
import { spinalContextMenuService } from "spinal-env-viewer-context-menu-service";
import { ItemModelSelectorBtn } from "./btn/item-model-selector-btn";
import { SpinalForgeExtention } from "spinal-env-viewer-panel-manager-service_spinalforgeextention";
import ItemModelSelector from "./vue/item-model-selector.vue";

const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";
spinalContextMenuService.registerApp(SIDE_BAR_HOOK_NAME, new ItemModelSelectorBtn(), [7]);
SpinalForgeExtention.registerExtention('ItemModelSelector', SpinalForgeExtention.createExtention({
  name: "ItemModelSelector",
  // Vue.extend to create a Compoment constructor
  vueMountComponent: Vue.extend(ItemModelSelector),
  // where to  append the Compoment
  parentContainer: document.body,

  panel: {
    title: "Select the Model to load",
    classname: "spinal-pannel",
    closeBehaviour: "delete"
  },
  style: {
    left: "405px",
    width: "700px",
    height: '250px'
  }
}));
