import {GraphicsDrawer} from "../../core/graphics-drawer";
import {Injectable} from "@angular/core";

@Injectable()
export class LabelsGraphicsService extends GraphicsDrawer{
  protected getType(): string {
    return 'label';
  }
}
