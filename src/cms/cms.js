import CMS from "netlify-cms";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ProjectCardPreview from "./preview-templates/ProjectCardPreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("project", ProjectCardPreview);
