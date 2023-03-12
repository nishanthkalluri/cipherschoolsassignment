const Video = require('../models/Video');

// Get all videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();

    res.status(200).json({
      success: true,
      data: videos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

// Get single video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found',
      });
    }

    res.status(200).json({
      success: true,
      data: video,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

// Create new video
exports.createVideo = async (req, res) => {
  try {
    const { title, description, url } = req.body;

    const video = await Video.create({
      title,
      description,
      url,
    });

    res.status(201).json({
      success: true,
      data: video,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

// Update video by ID
exports.updateVideoById = async (req, res) => {
  try {
    const { title, description, url } = req.body;

    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { title, description, url },
      { new: true }
    );

    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found',
      });
    }

    res.status(200).json({
      success: true,
      data: video,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

// Delete video by ID
exports.deleteVideoById = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Video deleted',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
