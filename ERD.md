Table users {
  id integer [primary key]
  email varchar
  password varchar
  created_at timestamp
}

Table job_applications {
  id integer [primary key]
  company_name varchar
  role_applied varchar
  date_applied timestamp
  days_passed integer
  response_status varchar
  user_id integer
  created_at timestamp
}

Table resumes {
  id integer [primary key]
  user_id integer
  resume_data text
  created_at timestamp
}

Table ai_suggestions {
  id integer [primary key]
  user_id integer
  suggestions text
  created_at timestamp
}

Table notifications {
  id integer [primary key]
  user_id integer
  message varchar
  status varchar
  created_at timestamp
}

Ref: job_applications.user_id > users.id
Ref: resumes.user_id > users.id
Ref: ai_suggestions.user_id > users.id
Ref: notifications.user_id > users.id
