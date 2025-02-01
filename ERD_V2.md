Table users {
id integer [primary key]
email varchar [unique]
password varchar
role varchar
full_name varchar
avatar_url varchar
created_at timestamp
updated_at timestamp
}

Table job_applications {
id integer [primary key]
user_id integer [not null]
company_name varchar
job_title varchar
date_applied date
status varchar [note: 'Pending, Interview Scheduled, Offer Received, Rejected']
notes text
resume_id integer [nullable] // Link to resume if user wants to attach it
created_at timestamp
updated_at timestamp
}

Table resumes {
id integer [primary key]
user_id integer [not null]
content text [note: 'AI-generated resume content']
created_at timestamp
updated_at timestamp
}

Table job_alerts {
id integer [primary key]
user_id integer [not null]
job_role varchar
location varchar
salary_range varchar
created_at timestamp
}

Table interview_preparation {
id integer [primary key]
user_id integer [not null]
job_application_id integer
ai_generated_questions text
created_at timestamp
}

Table career_insights {
id integer [primary key]
user_id integer [not null]
recommended_courses text
market_trends text
created_at timestamp
}

Table notifications {
id integer [primary key]
user_id integer [not null]
message text
status varchar [note: 'Unread, Read']
created_at timestamp
}

Table payments {
id integer [primary key]
user_id integer [not null]
plan varchar [note: 'Free, Premium']
amount decimal
payment_status varchar [note: 'Pending, Completed, Failed']
created_at timestamp
}

Ref: job_applications.user_id > users.id // A user can have multiple job applications
Ref: resumes.user_id > users.id // A user can have multiple resumes
Ref: job_alerts.user_id > users.id // A user can have multiple job alerts
Ref: interview_preparation.user_id > users.id // A user can prepare for multiple interviews
Ref: career_insights.user_id > users.id // A user can have multiple AI career insights
Ref: notifications.user_id > users.id // A user can receive multiple notifications
Ref: payments.user_id > users.id // A user can have multiple payment records



https://chatgpt.com/c/679c63b2-23c0-8011-853b-6ef20e31d4de
