
import * as cheerio from 'cheerio';
import Common from '../Common'
const uuid = require('@lukeed/uuid');
import * as _ from 'lodash';

export default class Button extends Common{
  name: string = 'Button';
  config: any = {};
  $fragment: any;
  isInline: boolean = true; 
  

  constructor (params: any) {
    super();
    console.log('*********', params);
    if (params.initType === 'auto') {
      this.config = params;
    } else {
      this.config = _.cloneDeep(require('./config').default);
    }

    this.setAttrsToStr();
  }

  public insertEditText (params) {
    this.config.model.custom.label = params.value;
  }

  public fragment () {
    const type = this.storage.get('preview_view_status') || 0;
    let textBox = '';
    if (type === 0) {
      textBox = `<edit-text-box :clearClass="true" uuid="${this.uuid}">${this.config.model.custom.label}</edit-text-box>`
    } else {
      textBox = this.config.model.custom.label;
    }
    return `
      <el-button type="primary" ${this._attrStr}>
        ${textBox}
      </el-button>
    `;
  }
}