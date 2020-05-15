<!--
Copyright 2020 SpinalCom - www.spinalcom.com

This file is part of SpinalCore.

Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.

This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.

If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <div class="ItemModelSelector-container">
    <md-list class="md-double-line">
      <md-subheader>{{ fileName }}</md-subheader>

      <md-list-item v-for="item in items"
                    :key="item.path"
                    :class="{
                      'item-selected':item.path == selectedItemPath,
                      'md-inset' : item.path != defaultItemPath
                    }"
                    @click="selectItem(item)">
        <md-icon v-if="item.path == defaultItemPath">
          star
        </md-icon>

        <div class="md-list-item-text">
          <span>{{ item.name }}</span>
          <span>{{ item.path }}</span>
        </div>
      </md-list-item>
    </md-list>
    <md-button :disabled="disableSave"
               @click="save">
      save
    </md-button>
  </div>
</template>

<script>
import { SpinalGraphService } from "spinal-env-viewer-graph-service";
import "spinal-env-viewer-plugin-forge";
const g_win = typeof window === "undefined" ? global : window;
const spinalForgeViewer = g_win.spinal.SpinalForgeViewer;

export default {
  name: "ItemModelSelector",
  data() {
    return {
      items: [],
      defaultItemPath: "",
      selectedItemPath: "",
      bimFileId: ""
    };
  },
  computed: {
    fileName() {
      if (this.bimFileId) {
        const bimFileRNode = SpinalGraphService.getRealNode(this.bimFileId);
        return bimFileRNode.info.name.get();
      }
      return "";
    },
    disableSave() {
      return !(
        this.defaultItemPath &&
        this.selectedItemPath &&
        this.defaultItemPath != this.selectedItemPath
      );
    }
  },
  mounted() {},
  methods: {
    showIcon(item) {
      return (
        item.path == this.defaultItemPath || item.path == this.selectedItemPath
      );
    },
    selectItem(item) {
      this.selectedItemPath = item.path;
    },
    save() {
      spinalForgeViewer.setBimFileDefautPath(this.bimFileId, this.selectedItemPath);
      this.defaultItemPath = this.selectedItemPath;
    },
    async opened(nodeId) {
      await spinalForgeViewer.waitForInitialization();
      this.bimFileId = nodeId;
      this.items = await spinalForgeViewer.getSVFListFromBimFile(nodeId);
      this.defaultItemPath = spinalForgeViewer.getBimFileDefautPath(nodeId);
      if (this.items.length !== 0 && !this.defaultItemPath) {
        this.defaultItemPath = this.items[0];
      }
      this.selectedItemPath = this.defaultItemPath;
    },
    removed() {},
    close() {},
    closeDialog() {}
  }
};
</script>

<style>
.ItemModelSelector-container,
.ItemModelSelector-container * {
  box-sizing: border-box;
}

.ItemModelSelector-container .md-list-item.item-selected {
  background-color: #365bab !important;
}
</style>
