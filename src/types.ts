export type CoursesResponse = Array<Course>;

export type Course = {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
};

export type LessonsResponse = Array<Lesson>;

export type Lesson = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  topics: Array<{
    title: string;
    resources: Array<{
      title: string;
      type: string;
      document_page_start: string;
      document_page_end: string;
      document: string;
      text: string;
    }>;
  }>;
};

export type AttachmentResponse = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Array<any>;
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    filesize: number;
    sizes: {};
  };
  post: any;
  source_url: string;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
  };
};

// TODO: Replace these types
export type ModuleLesson = Lesson;
export type ModuleLessonTopic = ModuleLesson["topics"][number];
export type ModuleLessonTopicResource = ModuleLessonTopic["resources"][number];

export type Status = "idle" | "pending" | "success" | "error";
