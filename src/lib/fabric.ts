import { fabric } from "fabric";
import { IRectOptions } from "fabric/fabric-impl";
import { computed } from "vue";
fabric.Object.prototype.transparentCorners = false;

export function FabricMaker() {
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = "center";
  const makeCircle = (left: number, top: number) => {
    const circle = new fabric.Circle({
      left: left,
      top: top,
      strokeWidth: 3,
      radius: 6,
      fill: "#fff",
      stroke: "#666",
    });
    circle.hasControls = circle.hasBorders = false;
    return circle;
  };
  const makeLine = (coords: number[]) => {
    const line = new fabric.Line(coords, {
      fill: "red",
      stroke: "red",
      strokeWidth: 3,
      // selectable: false,
      // evented: false
    });
    return line;
  };
  const makeRect = (
    left: number,
    top: number,
    w: number,
    h: number,
    cplor: string
  ) => {
    const rect = new fabric.Rect({
      left: left,
      top: top,
      fill: cplor,
      width: w,
      height: h,
    });
    return rect;
  };

  const makeText = (addText: string, addColor: string) => {
    const text = new fabric.IText(addText, {
      left: 55,
      top: 30,
      fontFamily: "helvetica",
      fill: addColor,
      angle: 0,
    });
    return text;
  };

  return {
    makeRect,
    makeCircle,
    makeLine,
    makeText,
  };
}

export const useFabric = (id: string) => {
  const canvas = computed<fabric.Canvas>(() => new fabric.Canvas(id));

  const makeText = (addText: string, addColor: string) => {
    const text = new fabric.IText(addText, {
      left: 55,
      top: 30,
      fontFamily: "helvetica",
      fill: addColor,
      angle: 0,
    });
    return text;
  };

  const addTextAction = (addText: string, addColor: string) => {
    const setText = makeText(addText, addColor);
    canvas.value.add(setText);
  };

  const makeRect = (
    left: number,
    top: number,
    w: number,
    h: number,
    cplor: string
  ) => {
    const rect = new fabric.Rect({
      left: left,
      top: top,
      fill: cplor,
      width: w,
      height: h,
    });
    canvas.value.add(rect);
  };

  const chnageFIleAction = (inputElement: HTMLInputElement) => {
    if (!inputElement?.files) return;
    const file = inputElement?.files[0];
    const url = URL.createObjectURL(file);
    fabric.util.loadImage(url, (img) => {
      const fabImage = new fabric.Image(img as unknown as HTMLImageElement);
      canvas.value.add(fabImage);
    });
  };

  const deleteObjrct = () => {
    const objects = canvas.value?.getActiveObjects();
    if (objects) {
      objects.forEach((object) => {
        canvas.value.remove(object);
      });
    }
  };

  return {
    makeRect,
    addTextAction,
    chnageFIleAction,
    deleteObjrct,
  };
};
