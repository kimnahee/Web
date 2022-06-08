package co.edu;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO {
	//class >> 복합적인 데이터를 하나의 변수에 담음
	//>> 사원번호, 이름, 이메일, 직무 등을 하나에 담을 수 없어서 클래스(필드)에 작성
	//public void insertEmp(int eId, String name, String email, String job)
	
	public void insertEmp(Employee emp){
		getConnect();
		String sql = "insert into employees (employee_id, last_name, email, job_id, hire_date) values(employees_seq.nextval,?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getLastName()); //첫번째 물음표
			psmt.setString(2, emp.getEmail());
			psmt.setString(3, emp.getJobId());
			psmt.setString(4, emp.getHireDate());
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
	}
	
	public List<String> getNames(){
		getConnect();
		String sql = "select first_name from employees";
		List<String> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				list.add(rs.getString("first_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disConnect();
		}
		
		return list;
	}
}
