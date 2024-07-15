const dashboardController = {
  addCase(req, res) {
    const totalChips = req.body.totalChips || 300;
    const numberOfColors = req.body.numberOfColors || 4;
    const chipsInColor1 = req.body.chipsInColor1 || 100;
    const chipsInColor2 = req.body.chipsInColor1 || 100;
    const chipsInColor3 = req.body.chipsInColor1 || 100;
    const chipsInColor4 = req.body.chipsInColor1 || 100;
  },
};

export { dashboardController };
