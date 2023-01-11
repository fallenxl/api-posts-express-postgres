
export const register = (req, res) => {
  res.status(200).json(req.user);
};

export const login = (req, res) => {
    res.status(200).json(req.user);
}
