SELECT contacts.first_name, contacts.last_name, contacts.phone, groups.name  
FROM contacts, groups, contact_groups 
WHERE 
contacts.contact_id = contact_groups.contact_id 
AND 
contact_groups.group_id = groups.group_id
ORDER BY
contacts.first_name DESC;